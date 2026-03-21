'use client'

import React, { useRef, useEffect, useCallback } from 'react'

interface SuryaEmblemProps {
  width?: number
  height?: number
  className?: string
}

export default function SuryaEmblem({
  width = 380,
  height = 420,
  className = '',
}: SuryaEmblemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const tRef = useRef(0)
  const sparksRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; life: number; max: number; size: number }>>([])
  const raysRef = useRef<Array<{
    angle: number; length: number; curve: number; width: number;
    phase: number; speed: number; flickerSpeed: number
  }>>([])
  const ambientRef = useRef<Array<{
    x: number; y: number; vx: number; vy: number;
    size: number; alpha: number; phase: number
  }>>([])
  const initializedRef = useRef(false)

  const initRays = useCallback((W: number) => {
    const rays: typeof raysRef.current = []
    const count = 23
    for (let i = 0; i < count; i++) {
      const gapSize = 0.17
      const startAngle = Math.PI / 2 + gapSize * Math.PI
      const endAngle = Math.PI / 2 - gapSize * Math.PI + Math.PI * 2
      const baseAngle = startAngle + (endAngle - startAngle) * (i / (count - 1))
      const baseLen = 75 + (Math.random() - 0.5) * 15
      const curveDir = (Math.random() - 0.5) * 0.3
      const w = 7 + Math.random() * 4
      rays.push({
        angle: baseAngle, length: baseLen, curve: curveDir, width: w,
        phase: Math.random() * Math.PI * 2,
        speed: 0.8 + Math.random() * 0.6,
        flickerSpeed: 2 + Math.random() * 2,
      })
    }
    return rays
  }, [])

  const initAmbient = useCallback((W: number, H: number) => {
    const pts: typeof ambientRef.current = []
    for (let i = 0; i < 40; i++) {
      pts.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -0.3 - Math.random() * 0.5,
        size: 0.4 + Math.random() * 1.2,
        alpha: 0.05 + Math.random() * 0.2,
        phase: Math.random() * Math.PI * 2,
      })
    }
    return pts
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = canvas.width
    const H = canvas.height
    const CX = W / 2
    const CY = H * 0.52
    const SUN_R = Math.min(W, H) * 0.135

    if (!initializedRef.current) {
      raysRef.current = initRays(W)
      ambientRef.current = initAmbient(W, H)
      initializedRef.current = true
    }

    const sparks = sparksRef.current
    const flameRays = raysRef.current
    const ambientPts = ambientRef.current

    function gold(a: number) { return `rgba(201,168,76,${a})` }
    function warmGold(a: number) { return `rgba(230,195,70,${a})` }
    function hotGold(a: number) { return `rgba(255,220,100,${a})` }

    function drawGlow(x: number, y: number, r: number, alpha: number) {
      const g = ctx!.createRadialGradient(x, y, 0, x, y, r)
      g.addColorStop(0, gold(alpha))
      g.addColorStop(0.4, gold(alpha * 0.4))
      g.addColorStop(1, 'rgba(201,168,76,0)')
      ctx!.fillStyle = g
      ctx!.beginPath()
      ctx!.arc(x, y, r, 0, Math.PI * 2)
      ctx!.fill()
    }

    function addSpark(x: number, y: number, vx: number, vy: number, life: number) {
      sparks.push({ x, y, vx, vy, life, max: life, size: 0.5 + Math.random() * 2 })
    }

    function drawFlameRay(ray: typeof flameRays[0]) {
      const t = tRef.current
      const { angle, length, curve, width: w, phase, speed, flickerSpeed } = ray
      const flicker = 0.85 + 0.15 * Math.sin(t * flickerSpeed + phase)
      const sway = Math.sin(t * speed + phase) * 0.06
      const currentAngle = angle + sway
      const currentLen = length * flicker

      const bx = CX + (SUN_R - 2) * Math.cos(currentAngle)
      const by = CY + (SUN_R - 2) * Math.sin(currentAngle)
      const tx = CX + (SUN_R + currentLen) * Math.cos(currentAngle + curve * 0.3)
      const ty = CY + (SUN_R + currentLen) * Math.sin(currentAngle + curve * 0.3)

      const midDist = SUN_R + currentLen * 0.5
      const perpAngle = currentAngle + Math.PI / 2
      const curveOffset = curve * currentLen * 0.3 * Math.sin(t * speed * 0.5 + phase)
      const mx = CX + midDist * Math.cos(currentAngle) + curveOffset * Math.cos(perpAngle)
      const my = CY + midDist * Math.sin(currentAngle) + curveOffset * Math.sin(perpAngle)

      const baseWidth = w
      const tipWidth = w * 0.08
      const midWidth = w * 0.55
      const perpX = Math.cos(perpAngle)
      const perpY = Math.sin(perpAngle)

      const bl_x = bx + perpX * baseWidth / 2, bl_y = by + perpY * baseWidth / 2
      const ml_x = mx + perpX * midWidth / 2, ml_y = my + perpY * midWidth / 2
      const tl_x = tx + perpX * tipWidth / 2, tl_y = ty + perpY * tipWidth / 2
      const br_x = bx - perpX * baseWidth / 2, br_y = by - perpY * baseWidth / 2
      const mr_x = mx - perpX * midWidth / 2, mr_y = my - perpY * midWidth / 2
      const tr_x = tx - perpX * tipWidth / 2, tr_y = ty - perpY * tipWidth / 2

      const grad = ctx!.createLinearGradient(bx, by, tx, ty)
      grad.addColorStop(0, gold(0.65 * flicker))
      grad.addColorStop(0.3, warmGold(0.55 * flicker))
      grad.addColorStop(0.6, gold(0.35 * flicker))
      grad.addColorStop(1, gold(0.05))

      ctx!.fillStyle = grad
      ctx!.beginPath()
      ctx!.moveTo(bl_x, bl_y)
      ctx!.quadraticCurveTo(ml_x, ml_y, tl_x, tl_y)
      ctx!.lineTo(tx, ty)
      ctx!.lineTo(tr_x, tr_y)
      ctx!.quadraticCurveTo(mr_x, mr_y, br_x, br_y)
      ctx!.closePath()
      ctx!.fill()

      // Inner hot core
      const innerW = baseWidth * 0.3, innerMidW = midWidth * 0.25
      const innerGrad = ctx!.createLinearGradient(bx, by, mx, my)
      innerGrad.addColorStop(0, hotGold(0.4 * flicker))
      innerGrad.addColorStop(0.5, warmGold(0.2 * flicker))
      innerGrad.addColorStop(1, 'rgba(255,220,100,0)')
      ctx!.fillStyle = innerGrad
      ctx!.beginPath()
      ctx!.moveTo(bx + perpX * innerW / 2, by + perpY * innerW / 2)
      ctx!.quadraticCurveTo(mx + perpX * innerMidW / 2, my + perpY * innerMidW / 2, mx, my)
      ctx!.quadraticCurveTo(mx - perpX * innerMidW / 2, my - perpY * innerMidW / 2, bx - perpX * innerW / 2, by - perpY * innerW / 2)
      ctx!.closePath()
      ctx!.fill()

      if (Math.random() < 0.02) {
        addSpark(tx, ty,
          Math.cos(currentAngle) * (1 + Math.random()) + (Math.random() - 0.5),
          Math.sin(currentAngle) * (1 + Math.random()) + (Math.random() - 0.5),
          30 + Math.random() * 40)
      }
    }

    function drawSunDisc() {
      const t = tRef.current
      const pulse = 0.9 + 0.1 * Math.sin(t * 1.5)

      drawGlow(CX, CY, SUN_R * 3, 0.06 * pulse)
      drawGlow(CX, CY, SUN_R * 2, 0.1 * pulse)
      drawGlow(CX, CY, SUN_R * 1.4, 0.15 * pulse)

      const discGrad = ctx!.createRadialGradient(CX - 8, CY - 10, 5, CX, CY, SUN_R)
      discGrad.addColorStop(0, hotGold(0.7 * pulse))
      discGrad.addColorStop(0.3, warmGold(0.6 * pulse))
      discGrad.addColorStop(0.7, gold(0.5 * pulse))
      discGrad.addColorStop(1, gold(0.35 * pulse))

      ctx!.save()
      ctx!.shadowColor = gold(0.5)
      ctx!.shadowBlur = 25
      ctx!.fillStyle = discGrad
      ctx!.beginPath()
      ctx!.arc(CX, CY, SUN_R, 0, Math.PI * 2)
      ctx!.fill()
      ctx!.restore()

      ctx!.strokeStyle = gold(0.5 * pulse)
      ctx!.lineWidth = 1.5
      ctx!.beginPath()
      ctx!.arc(CX, CY, SUN_R, 0, Math.PI * 2)
      ctx!.stroke()

      ctx!.strokeStyle = warmGold(0.25 * pulse)
      ctx!.lineWidth = 0.8
      ctx!.beginPath()
      ctx!.arc(CX, CY, SUN_R * 0.7, 0, Math.PI * 2)
      ctx!.stroke()

      drawGlow(CX - 5, CY - 5, 20, 0.3 * pulse)

      for (let i = 0; i < 12; i++) {
        const a = (Math.PI * 2 * i) / 12 + t * 0.1
        ctx!.strokeStyle = gold(0.08)
        ctx!.lineWidth = 0.5
        ctx!.beginPath()
        ctx!.moveTo(CX + 10 * Math.cos(a), CY + 10 * Math.sin(a))
        ctx!.lineTo(CX + (SUN_R - 5) * Math.cos(a), CY + (SUN_R - 5) * Math.sin(a))
        ctx!.stroke()
      }
    }

    function drawHorizon() {
      const hY = CY + SUN_R + 8
      const hGrad = ctx!.createLinearGradient(CX - 100, hY, CX + 100, hY)
      hGrad.addColorStop(0, 'rgba(201,168,76,0)')
      hGrad.addColorStop(0.3, gold(0.15))
      hGrad.addColorStop(0.5, gold(0.25))
      hGrad.addColorStop(0.7, gold(0.15))
      hGrad.addColorStop(1, 'rgba(201,168,76,0)')
      ctx!.strokeStyle = hGrad
      ctx!.lineWidth = 1.5
      ctx!.beginPath()
      ctx!.moveTo(CX - 120, hY)
      ctx!.lineTo(CX + 120, hY)
      ctx!.stroke()

      ctx!.strokeStyle = gold(0.08)
      ctx!.lineWidth = 0.5
      ctx!.beginPath()
      ctx!.moveTo(CX - 90, hY + 6)
      ctx!.lineTo(CX + 90, hY + 6)
      ctx!.stroke()

      const refGrad = ctx!.createRadialGradient(CX, hY + 15, 0, CX, hY + 15, 60)
      refGrad.addColorStop(0, gold(0.06))
      refGrad.addColorStop(1, 'rgba(201,168,76,0)')
      ctx!.fillStyle = refGrad
      ctx!.fillRect(CX - 80, hY + 2, 160, 40)
    }

    function drawAmbient() {
      const t = tRef.current
      for (const p of ambientPts) {
        p.x += p.vx + Math.sin(t * 0.5 + p.phase) * 0.15
        p.y += p.vy
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W }
        const flicker = 0.6 + 0.4 * Math.sin(t * 2.5 + p.phase)
        const a = p.alpha * flicker
        ctx!.fillStyle = gold(a)
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx!.fill()
        if (p.size > 1) drawGlow(p.x, p.y, p.size * 2.5, a * 0.2)
      }
    }

    function drawSparks() {
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.x += s.vx
        s.y += s.vy
        s.vy -= 0.01
        s.vx *= 0.99
        s.life--
        if (s.life <= 0) { sparks.splice(i, 1); continue }
        const a = s.life / s.max
        ctx!.fillStyle = warmGold(a * 0.9)
        ctx!.beginPath()
        ctx!.arc(s.x, s.y, s.size * a, 0, Math.PI * 2)
        ctx!.fill()
        drawGlow(s.x, s.y, s.size * 3 * a, a * 0.2)
      }
    }

    function animate() {
      tRef.current += 0.016
      ctx!.clearRect(0, 0, W, H)

      const bgGrad = ctx!.createRadialGradient(CX, CY, 50, CX, CY, 300)
      bgGrad.addColorStop(0, 'rgba(201,168,76,0.02)')
      bgGrad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx!.fillStyle = bgGrad
      ctx!.fillRect(0, 0, W, H)

      drawAmbient()
      for (const ray of flameRays) drawFlameRay(ray)
      drawHorizon()
      drawSunDisc()
      drawSparks()

      animRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animRef.current)
    }
  }, [width, height, initRays, initAmbient])

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="block"
        aria-hidden="true"
      />
      <p className="absolute bottom-0 left-0 right-0 text-center font-ui text-accent/40 text-[10px] uppercase tracking-[4px]">
        Radheya · రాధేయ
      </p>
    </div>
  )
}

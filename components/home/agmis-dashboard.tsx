'use client'

import { useState, useEffect } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts'
import { motion } from 'motion/react'

type Role = 'student' | 'faculty' | 'principal'

const dataSet = {
  student: {
    bar: [
      { name: 'Math', score: 88 },
      { name: 'Science', score: 92 },
      { name: 'History', score: 78 },
      { name: 'English', score: 85 },
    ],
    ring: [
      { name: 'Completed', value: 75, color: 'var(--accent-1)' },
      { name: 'Remaining', value: 25, color: 'rgba(255,255,255,0.05)' },
    ],
    line: [
      { month: 'Feb', attendance: 95 },
      { month: 'Mar', attendance: 92 },
      { month: 'Apr', attendance: 98 },
      { month: 'May', attendance: 96 },
    ],
  },
  faculty: {
    bar: [
      { name: 'Class A', score: 82 },
      { name: 'Class B', score: 74 },
      { name: 'Class C', score: 90 },
      { name: 'Class D', score: 80 },
    ],
    ring: [
      { name: 'Passed', value: 88, color: 'var(--accent-2)' },
      { name: 'Risk Alert', value: 12, color: 'var(--accent-danger)' },
    ],
    line: [
      { month: 'Feb', attendance: 91 },
      { month: 'Mar', attendance: 89 },
      { month: 'Apr', attendance: 93 },
      { month: 'May', attendance: 92 },
    ],
  },
  principal: {
    bar: [
      { name: 'Science', score: 87 },
      { name: 'Arts', score: 79 },
      { name: 'Commerce', score: 84 },
      { name: 'Engineering', score: 89 },
    ],
    ring: [
      { name: 'Enrolled', value: 92, color: 'var(--accent-3)' },
      { name: 'Withdrawn', value: 8, color: 'var(--accent-warn)' },
    ],
    line: [
      { month: 'Feb', attendance: 88 },
      { month: 'Mar', attendance: 87 },
      { month: 'Apr', attendance: 90 },
      { month: 'May', attendance: 91 },
    ],
  },
}

export function AgmisDashboard() {
  const [role, setRole] = useState<Role>('student')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-[280px] w-full rounded-2xl border border-border bg-card/40 flex items-center justify-center">
        <span className="text-sm text-muted-foreground">Loading Analytics Engine…</span>
      </div>
    )
  }

  const currentData = dataSet[role]

  const handleRoleChange = (newRole: Role) => {
    if (!document.startViewTransition) {
      setRole(newRole)
      return
    }
    document.startViewTransition(() => {
      setRole(newRole)
    })
  }

  return (
    <div className="w-full rounded-2xl border border-border bg-card/40 p-5 backdrop-blur-md">
      {/* Dashboard Top Header & Role Toggle */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/50 pb-4 mb-4">
        <div>
          <h4 className="text-sm font-semibold tracking-tight text-foreground">AGMIS Interactive Control Center</h4>
          <p className="text-xs text-muted-foreground">Select role to preview specialized intelligence outputs</p>
        </div>
        
        {/* Role Toggle Switch */}
        <div className="flex rounded-lg border border-border bg-background/50 p-1 self-start sm:self-auto">
          {(['student', 'faculty', 'principal'] as Role[]).map((r) => (
            <button
              key={r}
              onClick={() => handleRoleChange(r)}
              className={`rounded-md px-3 py-1 text-xs font-medium capitalize transition-all cursor-pointer ${
                role === r
                  ? 'bg-accent-1 text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* 3 dynamic data charts grid */}
      <div className="grid gap-4 md:grid-cols-3">
        
        {/* Chart 1: Bar Chart (Academic performance) */}
        <div className="rounded-xl border border-border/30 bg-background/30 p-3">
          <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Academic Performance</h5>
          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={currentData.bar} margin={{ top: 5, right: 5, left: -25, bottom: 5 }}>
                <XAxis dataKey="name" stroke="#888888" fontSize={9} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={9} tickLine={false} axisLine={false} domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '10px' }}
                />
                <Bar dataKey="score" fill="var(--accent-1)" radius={[4, 4, 0, 0]} maxBarSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Ring Chart (Status indicator / course progress) */}
        <div className="rounded-xl border border-border/30 bg-background/30 p-3">
          <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">System Thresholds</h5>
          <div className="h-44 w-full flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={currentData.ring}
                  cx="50%"
                  cy="50%"
                  innerRadius={48}
                  outerRadius={60}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {currentData.ring.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '10px' }}
                />
              </PieChart>
            </ResponsiveContainer>
            
            {/* Center Value */}
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-lg font-bold text-foreground">
                {currentData.ring[0].value}%
              </span>
              <span className="text-[9px] text-muted-foreground tracking-wide uppercase">
                {role === 'student' ? 'Complete' : role === 'faculty' ? 'Passing' : 'Enrolled'}
              </span>
            </div>
          </div>
        </div>

        {/* Chart 3: Line Chart (Attendance/Time-series metrics) */}
        <div className="rounded-xl border border-border/30 bg-background/30 p-3">
          <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Attendance Timeline</h5>
          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={currentData.line} margin={{ top: 5, right: 10, left: -25, bottom: 5 }}>
                <XAxis dataKey="month" stroke="#888888" fontSize={9} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={9} tickLine={false} axisLine={false} domain={[80, 100]} />
                <Tooltip 
                  contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '10px' }}
                />
                <Line
                  type="monotone"
                  dataKey="attendance"
                  stroke="var(--accent-2)"
                  strokeWidth={2}
                  dot={{ r: 3, stroke: 'var(--accent-2)', strokeWidth: 1, fill: 'var(--card)' }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  )
}

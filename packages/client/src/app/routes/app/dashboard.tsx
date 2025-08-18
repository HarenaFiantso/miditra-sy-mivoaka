import { SplitText } from '@/components/shared';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { CreditCard, DollarSign, Plus, TrendingUp } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function Dashboard() {
  const monthlyData = {
    income: 4500,
    expenses: 4200,
    balance: 300,
  };

  const categoryData = [
    { name: 'Food', value: 800, color: '#7c3aed' },
    { name: 'Girlfriend', value: 50, color: '#fff' },
  ];

  const monthlyTrend = [
    { month: 'Jan', income: 3800, expenses: 2700 },
    { month: 'Feb', income: 4500, expenses: 3200 },
    { month: 'Mar', income: 3900, expenses: 3600 },
    { month: 'Apr', income: 5000, expenses: 4300 },
    { month: 'May', income: 4700, expenses: 3800 },
    { month: 'Jun', income: 4200, expenses: 4100 },
    { month: 'Jul', income: 5100, expenses: 4700 },
    { month: 'Aug', income: 4900, expenses: 3500 },
  ];

  return (
    <div className="h-screen w-[1536px] py-10">
      <div className="flex justify-between gap-4 space-y-10">
        <div>
          <h2 className="relative z-10 mb-4 max-w-[22ch] text-[3rem] leading-none font-medium tracking-[-3px] whitespace-nowrap text-white select-none [text-shadow:0_0_2px_rgba(255,255,255,0.1),0_0_4px_rgba(255,255,255,0.3),0_0_8px_rgba(255,255,255,0.4),0_0_136px_rgba(120,60,255,0.8)]">
            <SplitText
              text="Dashboard"
              className="hero-split"
              splitType="chars"
              delay={30}
              duration={2}
              ease="elastic.out(0.5, 0.3)"
            />
          </h2>
          <p className="text-muted-foreground mt-1">Overview of Your Finances</p>
        </div>
        <div className="flex gap-2">
          <Button variant="default" className="cta-button w-full gap-2 rounded-full px-8 py-3">
            <Plus className="h-4 w-4" />
            New expense
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="border-r border-white/10 bg-gradient-to-br from-[#0f131a] to-[#181d25]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">Income this month</CardTitle>
            <TrendingUp className="text-accent h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-accent text-2xl font-bold">+{monthlyData.income.toLocaleString()}€</div>
            <p className="text-muted-foreground text-xs">+5.2% compared to last month</p>
          </CardContent>
        </Card>
        <Card className="border-r border-white/10 bg-gradient-to-br from-[#0f131a] to-[#181d25]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">Expenses this month</CardTitle>
            <CreditCard className="h-4 w-4 text-[#7c3aed]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#7c3aed]">-{monthlyData.expenses.toLocaleString()}€</div>
            <p className="text-muted-foreground text-xs">+2.1% compared to last month</p>
          </CardContent>
        </Card>
        <Card className="border-r border-white/10 bg-gradient-to-br from-[#0f131a] to-[#181d25]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">Available balance</CardTitle>
            <DollarSign className={`h-4 w-4 ${monthlyData.balance >= 0 ? 'text-accent' : 'text-destructive'}`} />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${monthlyData.balance >= 0 ? 'text-accent' : 'text-destructive'}`}>
              {monthlyData.balance >= 0 ? '+' : ''}
              {monthlyData.balance.toLocaleString()}€
            </div>
            <p className="text-muted-foreground text-xs">Income - Expenses</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-6">
        <Card className="border-r border-white/10 bg-gradient-to-br from-[#0f131a] to-[#181d25]">
          <CardHeader>
            <CardTitle className="text-xl text-white">Breakdown by category</CardTitle>
            <CardDescription>Your expenses this month by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    stroke="transparent"
                    label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}€`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card className="border-r border-white/10 bg-gradient-to-br from-[#0f131a] to-[#181d25]">
          <CardHeader>
            <CardTitle className="text-xl text-white">Monthly trend</CardTitle>
            <CardDescription>Income vs expenses comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyTrend}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value}€`} />
                  <Legend />
                  <Bar dataKey="income" fill="#fff" name="Income" />
                  <Bar dataKey="expenses" fill="#7c3aed" name="Expenses" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

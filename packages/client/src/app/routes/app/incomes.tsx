import { SplitText } from '@/components/shared';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input } from '@/components/ui';
import { Calendar, Edit, Plus, Search, Trash2, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function Incomes() {
  const [searchTerm, setSearchTerm] = useState('');
  const incomes = [
    {
      id: 1,
      source: 'Salary - Company ABC',
      amount: 3500.0,
      date: '2024-01-01',
      description: 'Monthly salary',
      createdAt: '2024-01-01',
    },
    {
      id: 2,
      source: 'Freelance - Web Project',
      amount: 800.0,
      date: '2024-01-15',
      description: 'Client website development',
      createdAt: '2024-01-15',
    },
    {
      id: 3,
      source: 'Investment - Dividends',
      amount: 200.0,
      date: '2024-01-10',
      description: 'Stock dividends',
      createdAt: '2024-01-10',
    },
  ];

  const filteredIncomes = incomes.filter(
    (income) =>
      income.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
      income.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalIncome = filteredIncomes.reduce((sum, income) => sum + income.amount, 0);

  return (
    <div className="min-h-screen w-[1536px] py-10">
      <div className="flex justify-between gap-4 space-y-10">
        <div>
          <h2 className="relative z-10 mb-4 max-w-[22ch] text-[3rem] leading-none font-medium tracking-[-3px] whitespace-nowrap text-white select-none [text-shadow:0_0_2px_rgba(255,255,255,0.1),0_0_4px_rgba(255,255,255,0.3),0_0_8px_rgba(255,255,255,0.4),0_0_136px_rgba(120,60,255,0.8)]">
            <SplitText
              text="Incomes"
              className="hero-split"
              splitType="chars"
              delay={30}
              duration={2}
              ease="elastic.out(0.5, 0.3)"
            />
          </h2>
          <p className="text-muted-foreground mt-1">Manage all your incomes and transactions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="default" className="cta-button w-full gap-2 rounded-full px-8 py-3">
            <Plus className="h-4 w-4" />
            New income
          </Button>
        </div>
      </div>

      <Card className="border border-white/10 bg-gradient-to-br from-[#0f131a] via-[#151a22] to-[#1e2530] shadow-lg shadow-black/30">
        <CardContent>
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              placeholder="Search for income..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-white/10 p-8 pl-10 text-white focus:border-none"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mt-10 border border-white/10 bg-gradient-to-br from-[#0f131a] via-[#151a22] to-[#1e2530] shadow-lg shadow-black/30">
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-5">
              <p className="text-muted-foreground text-sm">Total displayed income</p>
              <p className="text-accent text-2xl font-bold">+{totalIncome.toLocaleString('en-US')}$</p>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground text-sm">{filteredIncomes.length} income(s)</p>
              <TrendingUp className="text-accent mt-1 ml-auto h-8 w-8" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-10 border border-white/10 bg-gradient-to-br from-[#0f131a] via-[#151a22] to-[#1e2530] shadow-lg shadow-black/30">
        <CardHeader>
          <CardTitle className="text-xl text-white">Income List</CardTitle>
          <CardDescription>{filteredIncomes.length} result(s) found</CardDescription>
        </CardHeader>
        <CardContent>
          {filteredIncomes.length === 0 ? (
            <div className="py-8 text-center">
              <h1 className="text-[6rem] text-white">(；一_一)</h1>
              <p className="text-lg text-white">No incomes found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredIncomes.map((income) => (
                <div
                  key={income.id}
                  className="flex cursor-pointer items-center justify-between rounded-lg border border-white/10 p-4 transition-colors hover:bg-[#0f131a]/50"
                >
                  <div className="flex-1 space-y-5">
                    <h3 className="mb-1 text-lg font-semibold text-white">{income.source}</h3>
                    {income.description && <p className="text-muted-foreground mb-2 text-sm">{income.description}</p>}
                    <div className="text-muted-foreground flex items-center gap-2 text-sm">
                      <Calendar className="h-3 w-3" />
                      {new Date(income.date).toLocaleDateString('en-US')}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-accent text-xl font-bold">+{income.amount.toLocaleString('en-US')}$</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="text-[#7c3aed]">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

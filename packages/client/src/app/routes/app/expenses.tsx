import { SplitText } from '@/components/shared';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { Calendar, Edit, Plus, Receipt, RefreshCw, Search, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
  type: 'one-time' | 'recurring';
  date: string;
  hasReceipt: boolean;
  createdAt: string;
  startDate?: string;
  endDate?: string | null;
}

export default function Expenses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const expenses: Expense[] = [
    {
      id: 1,
      description: 'University books (Amazon)',
      amount: 120.0,
      category: 'Studies',
      type: 'one-time',
      date: '2025-06-10',
      hasReceipt: true,
      createdAt: '2025-06-10',
    },
    {
      id: 2,
      description: 'LinkedIn Learning subscription',
      amount: 29.99,
      category: 'Studies',
      type: 'recurring',
      date: '2025-06-12',
      startDate: '2025-06-12',
      endDate: null,
      hasReceipt: false,
      createdAt: '2025-06-12',
    },
    {
      id: 3,
      description: 'Flowers for Annabelle',
      amount: 35.0,
      category: 'Girlfriend',
      type: 'one-time',
      date: '2025-06-14',
      hasReceipt: false,
      createdAt: '2025-06-14',
    },
    {
      id: 4,
      description: 'Romantic dinner (Chez Marie)',
      amount: 95.0,
      category: 'Girlfriend',
      type: 'one-time',
      date: '2025-06-20',
      hasReceipt: true,
      createdAt: '2025-06-20',
    },
    {
      id: 5,
      description: 'School supplies (office)',
      amount: 55.0,
      category: 'Studies',
      type: 'one-time',
      date: '2025-07-02',
      hasReceipt: true,
      createdAt: '2025-07-02',
    },
    {
      id: 6,
      description: 'Birthday gift (perfume)',
      amount: 75.0,
      category: 'Girlfriend',
      type: 'one-time',
      date: '2025-07-10',
      hasReceipt: true,
      createdAt: '2025-07-10',
    },
    {
      id: 7,
      description: 'Beach weekend (hotel)',
      amount: 220.0,
      category: 'Girlfriend',
      type: 'one-time',
      date: '2025-08-10',
      hasReceipt: true,
      createdAt: '2025-08-10',
    },
    {
      id: 8,
      description: 'Personalized bracelet',
      amount: 65.0,
      category: 'Girlfriend',
      type: 'one-time',
      date: '2025-08-14',
      hasReceipt: true,
      createdAt: '2025-08-14',
    },
  ];

  const categories = ['all', 'Studies', 'Girlfriend', 'Transport', 'Housing', 'Leisure', 'Health', 'Others'];

  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || expense.category === selectedCategory;
    const matchesType = selectedType === 'all' || expense.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const totalExpenses = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="min-h-screen w-[1536px] py-10">
      <div className="flex justify-between gap-4 space-y-10">
        <div>
          <h2 className="relative z-10 mb-4 max-w-[22ch] text-[3rem] leading-none font-medium tracking-[-3px] whitespace-nowrap text-white select-none [text-shadow:0_0_2px_rgba(255,255,255,0.1),0_0_4px_rgba(255,255,255,0.3),0_0_8px_rgba(255,255,255,0.4),0_0_136px_rgba(120,60,255,0.8)]">
            <SplitText
              text="Expenses"
              className="hero-split"
              splitType="chars"
              delay={30}
              duration={2}
              ease="elastic.out(0.5, 0.3)"
            />
          </h2>
          <p className="text-muted-foreground mt-1">Manage all your expenses and transactions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="default" className="cta-button w-full gap-2 rounded-full px-8 py-3">
            <Plus className="h-4 w-4" />
            New expense
          </Button>
        </div>
      </div>

      <Card className="border border-white/10 bg-gradient-to-br from-[#0f131a] via-[#151a22] to-[#1e2530] shadow-lg shadow-black/30">
        <CardContent>
          <div className="flex flex-row gap-5">
            <div className="relative flex-1">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                placeholder="Search for an expense..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-white/10 p-8 pl-10 text-white focus:border-none"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="border border-white/10 p-8 pl-10 text-white focus:border-none">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="border border-white/10 p-8 pl-10 text-white focus:border-none">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                <SelectItem value="one-time">One-time</SelectItem>
                <SelectItem value="recurring">Recurring</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-10 border border-white/10 bg-gradient-to-br from-[#0f131a] via-[#151a22] to-[#1e2530] shadow-lg shadow-black/30">
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-5">
              <p className="text-muted-foreground text-sm">Total displayed expenses</p>
              <p className="text-2xl font-bold text-white">{totalExpenses.toLocaleString('en-US')}€</p>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground text-sm">{filteredExpenses.length} expense(s)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-10 border border-white/10 bg-gradient-to-br from-[#0f131a] via-[#151a22] to-[#1e2530] shadow-lg shadow-black/30">
        <CardHeader>
          <CardTitle className="text-xl text-white">Expenses List</CardTitle>
          <CardDescription>{filteredExpenses.length} result(s) found</CardDescription>
        </CardHeader>
        <CardContent>
          {filteredExpenses.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-muted-foreground">No expenses found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredExpenses.map((expense) => (
                <div
                  key={expense.id}
                  className="flex cursor-pointer items-center justify-between rounded-lg border border-white/10 p-4 transition-colors hover:bg-[#0f131a]/50"
                >
                  <div className="flex-1 space-y-5">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="font-semibold text-white">{expense.description}</h3>
                      {expense.hasReceipt && <Receipt className="text-accent h-4 w-4" />}
                      {expense.type === 'recurring' && <RefreshCw className="text-primary h-4 w-4" />}
                    </div>
                    <div className="text-muted-foreground flex items-center gap-4 text-sm">
                      <Badge variant="secondary">{expense.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(expense.date).toLocaleDateString('en-US')}
                      </div>
                      {expense.type === 'recurring' && (
                        <Badge variant="outline" className="border-none bg-[#7c3aed] text-xs text-white">
                          Recurring
                        </Badge>
                      )}
                    </div>
                    {expense.type === 'recurring' && (
                      <div className="mt-1 text-xs text-white">
                        From {new Date(expense.startDate as string).toLocaleDateString('en-US')}
                        {expense.endDate && ` to ${new Date(expense.endDate).toLocaleDateString('en-US')}`}
                        {!expense.endDate && ' (ongoing)'}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-lg font-bold text-white">-{expense.amount.toLocaleString('en-US')}€</p>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/expenses/${expense.id}/edit`}>
                        <Button variant="ghost" size="icon" className="text-[#7c3aed]">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
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

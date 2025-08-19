import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, FolderOpen, Check, X } from 'lucide-react';
import { SplitText } from '@/components/shared';

interface Category {
  id: number;
  name: string;
  count: number;
  isDefault: boolean;
}

export default function Categories() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');
  const [isAddingNew, setIsAddingNew] = useState(false);

  const categories = [
    { id: 1, name: 'Alimentation', count: 15, isDefault: true },
    { id: 2, name: 'Transport', count: 8, isDefault: true },
    { id: 3, name: 'Logement', count: 12, isDefault: true },
    { id: 4, name: 'Loisirs', count: 6, isDefault: true },
    { id: 5, name: 'Santé', count: 4, isDefault: true },
    { id: 6, name: 'Vêtements', count: 3, isDefault: false },
    { id: 7, name: 'Éducation', count: 2, isDefault: false },
    { id: 8, name: 'Autres', count: 5, isDefault: true },
  ];

  const handleEdit = (category: Category) => {
    setEditingId(category.id);
    setEditingName(category.name);
  };

  const handleSaveEdit = () => {
    // TODO: Save to API
    console.log('Saving category:', editingName);
    setEditingId(null);
    setEditingName('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingName('');
  };

  const handleDelete = (id: number) => {
    // TODO: Delete via API
    console.log('Deleting category:', id);
  };

  const handleAddNew = () => {
    // TODO: Add via API
    console.log('Adding category:', newCategoryName);
    setNewCategoryName('');
    setIsAddingNew(false);
  };

  const handleCancelNew = () => {
    setNewCategoryName('');
    setIsAddingNew(false);
  };

  return (
    <div className="min-h-screen w-[1536px] py-10">
      <div className="flex justify-between gap-4 space-y-10">
        <div>
          <h2 className="relative z-10 mb-4 max-w-[22ch] text-[3rem] leading-none font-medium tracking-[-3px] whitespace-nowrap text-white select-none [text-shadow:0_0_2px_rgba(255,255,255,0.1),0_0_4px_rgba(255,255,255,0.3),0_0_8px_rgba(255,255,255,0.4),0_0_136px_rgba(120,60,255,0.8)]">
            <SplitText
              text="Categories"
              className="hero-split"
              splitType="chars"
              delay={30}
              duration={2}
              ease="elastic.out(0.5, 0.3)"
            />
          </h2>
          <p className="text-muted-foreground mt-1">Gérez vos categories de dépenses</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => setIsAddingNew(true)}
            variant="default"
            className="cta-button w-full gap-2 rounded-full px-8 py-3"
          >
            <Plus className="h-4 w-4" />
            Nouvelle categorie
          </Button>
        </div>
      </div>
      {isAddingNew && (
        <Card className="border border-white/10 bg-gradient-to-br from-[#0f131a] via-[#151a22] to-[#1e2530] shadow-lg shadow-black/30">
          <CardContent>
            <div className="flex items-center gap-4">
              <Input
                placeholder="Nom de la catégorie"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                className="border border-white/10 p-8 pl-10 text-white focus:border-none"
              />
              <Button className="bg-green-600" size="icon" onClick={handleAddNew} disabled={!newCategoryName.trim()}>
                <Check className="h-4 w-4 text-white" />
              </Button>
              <Button className="bg-red-600" size="icon" onClick={handleCancelNew}>
                <X className="h-4 w-4 text-white" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      <Card className="mt-10 border border-white/10 bg-gradient-to-br from-[#0f131a] via-[#151a22] to-[#1e2530] shadow-lg shadow-black/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-white">
            <FolderOpen className="h-5 w-5" />
            Mes catégories
          </CardTitle>
          <CardDescription>{categories.length} catégorie(s) disponible(s)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex cursor-pointer items-center justify-between rounded-lg border border-white/10 p-4 transition-colors hover:bg-[#0f131a]/50"
              >
                <div className="flex flex-1 items-center gap-3">
                  {editingId === category.id ? (
                    <div className="flex flex-1 items-center gap-2">
                      <Input
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                        className="border border-white/10 p-8 pl-10 text-white focus:border-none"
                      />
                      <Button
                        size="icon"
                        onClick={handleSaveEdit}
                        disabled={!editingName.trim()}
                        className="h-8 w-8 bg-green-500"
                      >
                        <Check className="h-3 w-3 text-white" />
                      </Button>
                      <Button size="icon" onClick={handleCancelEdit} className="h-8 w-8 bg-red-500">
                        <X className="h-3 w-3 text-white" />
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                          {category.isDefault && (
                            <Badge variant="secondary" className="text-xs">
                              Par défaut
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm">{category.count} dépense(s)</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(category)} className="h-8 w-8">
                          <Edit className="h-3 w-3 text-white" />
                        </Button>
                        {!category.isDefault && category.count === 0 && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(category.id)}
                            className="text-destructive hover:text-destructive h-8 w-8"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="my-10 border border-white/10 bg-gradient-to-br from-[#0f131a] via-[#151a22] to-[#1e2530] shadow-lg shadow-black/30">
        <CardContent>
          <div className="text-muted-foreground text-sm">
            <h4 className="font-xl mb-2 text-white">À savoir :</h4>
            <ul className="list-inside list-disc space-y-1">
              <li>Les catégories par défaut ne peuvent pas être supprimées</li>
              <li>Vous ne pouvez supprimer que les catégories personnalisées sans dépenses associées</li>
              <li>Modifier une catégorie met à jour toutes les dépenses associées</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

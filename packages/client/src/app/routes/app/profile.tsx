import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { User, Mail, Calendar, Lock, Eye, EyeOff, Save, LogOut } from 'lucide-react';
import { SplitText } from '@/components/shared';
import { useAuth } from '@/hooks/use-auth';

interface ProfileFormData {
  name: string;
  email: string;
}

interface PasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function Profile() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [isLoadingPassword, setIsLoadingPassword] = useState(false);

  const { logout } = useAuth();

  const userData = {
    name: 'Fiantso Harena',
    email: 'test@test.com',
    createdAt: '2024-01-01',
    totalExpenses: 4200,
    totalIncomes: 4500,
    categoriesCount: 8,
  };

  const profileForm = useForm<ProfileFormData>({
    defaultValues: {
      name: userData.name,
      email: userData.email,
    },
  });

  const passwordForm = useForm<PasswordFormData>({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const onSubmitProfile = async (data: ProfileFormData) => {
    setIsLoadingProfile(true);
    try {
      console.log('Updating profile:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsLoadingProfile(false);
    }
  };

  const onSubmitPassword = async (data: PasswordFormData) => {
    console.log(data);
    setIsLoadingPassword(true);
    try {
      console.log('Updating password');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      passwordForm.reset();
    } catch (error) {
      console.error('Error updating password:', error);
    } finally {
      setIsLoadingPassword(false);
    }
  };

  return (
    <div className="min-h-screen w-[1536px] py-10">
      <div className="flex justify-between gap-4 space-y-10">
        <div>
          <h2 className="relative z-10 mb-4 max-w-[22ch] text-[3rem] leading-none font-medium tracking-[-3px] whitespace-nowrap text-white select-none [text-shadow:0_0_2px_rgba(255,255,255,0.1),0_0_4px_rgba(255,255,255,0.3),0_0_8px_rgba(255,255,255,0.4),0_0_136px_rgba(120,60,255,0.8)]">
            <SplitText
              text="Profile"
              className="hero-split"
              splitType="chars"
              delay={30}
              duration={2}
              ease="elastic.out(0.5, 0.3)"
            />
          </h2>
          <p className="text-muted-foreground mt-1">Manage your personal information and preferences</p>
        </div>
        <div className="flex gap-2">
          <Button variant="default" className="cta-button w-full gap-2 rounded-full px-8 py-3" onClick={logout}>
            <LogOut className="h-4 w-4" />
            Log Out
          </Button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-3 items-center gap-6">
        <Card className="border border-white/10 bg-gradient-to-br from-[#0f131a] via-[#151a22] to-[#1e2530] shadow-lg shadow-black/30">
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white/20 p-2">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-white">Member since</p>
                <p className="font-semibold text-white">{new Date(userData.createdAt).toLocaleDateString('en-US')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-white/10 bg-gradient-to-br from-[#0f131a] via-[#151a22] to-[#1e2530] shadow-lg shadow-black/30">
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white/20 p-2">
                <User className="text-accent h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-white">Expenses this month</p>
                <p className="font-semibold text-white">{userData.totalExpenses.toLocaleString('en-US')}€</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-white/10 bg-gradient-to-br from-[#0f131a] via-[#151a22] to-[#1e2530] shadow-lg shadow-black/30">
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white/20 p-2">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-white">Categories</p>
                <p className="font-semibold text-white">{userData.categoriesCount} categories</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-10 border border-white/10 bg-gradient-to-br from-[#0f131a] via-[#151a22] to-[#1e2530] shadow-lg shadow-black/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-white">
            <User className="h-5 w-5" />
            Personal Information
          </CardTitle>
          <CardDescription>Edit your basic information</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...profileForm}>
            <form onSubmit={profileForm.handleSubmit(onSubmitProfile)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={profileForm.control}
                  name="name"
                  rules={{ required: 'Name is required' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          {...field}
                          className="border border-white/10 p-8 pl-10 text-white focus:border-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={profileForm.control}
                  name="email"
                  rules={{
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email',
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          {...field}
                          className="border border-white/10 p-8 pl-10 text-white focus:border-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                variant="default"
                className="cta-button gap-2 rounded-full px-8 py-3"
                disabled={isLoadingProfile}
              >
                <Save className="h-4 w-4" />
                {isLoadingProfile ? 'Saving...' : 'Save Changes'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="my-10 border border-white/10 bg-gradient-to-br from-[#0f131a] via-[#151a22] to-[#1e2530] shadow-lg shadow-black/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-white">
            <Lock className="h-5 w-5" />
            Change Password
          </CardTitle>
          <CardDescription>Change your password to secure your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...passwordForm}>
            <form onSubmit={passwordForm.handleSubmit(onSubmitPassword)} className="space-y-4">
              <FormField
                control={passwordForm.control}
                name="currentPassword"
                rules={{ required: 'Current password is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Current Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showCurrentPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          {...field}
                          className="border border-white/10 p-8 pl-10 text-white focus:border-none"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute top-1/2 right-2 h-8 w-8 -translate-y-1/2 text-white"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        >
                          {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={passwordForm.control}
                  name="newPassword"
                  rules={{
                    required: 'New password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">New Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            className="border border-white/10 p-8 pl-10 text-white focus:border-none"
                            type={showNewPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute top-1/2 right-2 h-8 w-8 -translate-y-1/2 text-white"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                          >
                            {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={passwordForm.control}
                  name="confirmPassword"
                  rules={{
                    required: 'Password confirmation is required',
                    validate: (value) => value === passwordForm.getValues('newPassword') || 'Passwords do not match',
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Confirm New Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            className="border border-white/10 p-8 pl-10 text-white focus:border-none"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute top-1/2 right-2 h-8 w-8 -translate-y-1/2 text-white"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                variant="default"
                className="cta-button gap-2 rounded-full px-8 py-3"
                disabled={isLoadingPassword}
              >
                <Lock className="h-4 w-4" />
                {isLoadingPassword ? 'Changing...' : 'Change Password'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

import { Button } from '@/components/ui';
import { useAuth } from '@/hooks/use-auth';

export default function Dashboard() {
  const { logout, user } = useAuth();
  return (
    <div className="flex flex-col space-y-10">
      <h1 className="text-5xl text-white">Welcome {user?.user.username}</h1>
      <Button
        type="submit"
        variant="default"
        onClick={() => logout()}
        size="lg"
        className="cta-button w-full rounded-full p-8 text-lg font-semibold"
      >
        Logout
      </Button>
    </div>
  );
}

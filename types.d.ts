type UseAppwriteOptions<T, P extends Record<string, string | number>> = {
  fn: (params: P) => Promise<T>;
  params?: P;
  skip?: boolean;
};

type UseAppwriteReturn<T, P> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: (newParams: P) => Promise<void>;
};

type User = {
  $id: string;
  name: string;
  email: string;
  avatar: string;
};

type GlobalContextType = {
  isLogged: boolean;
  user: User | null;
  loading: boolean;
  refetch: (newParams?: Record<string, string | number>) => Promise<void>;
};

type tabBarIconProps = {
  focused: boolean;
  icon: any;
  title: string;
};

type featureCardProps = {
  onPress?: () => void;
}

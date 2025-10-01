import type { StackScreenProps } from '@react-navigation/stack';
import { Paths } from './paths';
export type RootStackParamList = {
  [Paths.Home]: undefined;
  [Paths.Profile]: undefined;
  [Paths.Cart]: undefined;
  [Paths.Favorite]: undefined;
};

// Helper type for screen props
export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;

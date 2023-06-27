import { CartProvider } from '../context/cart/CartProvider';
import { DrawerNavigation } from '../navigation/DrawerNavigator';

export default function RootLayout() {
  
  return (
    <CartProvider>
      <DrawerNavigation/>
    </CartProvider>
  );
}
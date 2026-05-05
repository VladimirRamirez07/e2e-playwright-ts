import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { users } from './data/users';

test.describe('Flujo de compra - Sauce Demo', () => {

  test('compra exitosa de un producto', async ({ page }) => {
    // 1. Login
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);

    // 2. Agregar producto al carrito
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();

    // 3. Ir a checkout
    const cartPage = new CartPage(page);
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await cartPage.checkout();

    // 4. Llenar información
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillInfo('Vladimir', 'Ramirez', '10101');

    // 5. Confirmar compra
    await checkoutPage.finish();
    await expect(checkoutPage.confirmationMessage).toHaveText('Thank you for your order!');
  });

});
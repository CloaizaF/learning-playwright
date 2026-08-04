import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dthere%2Bthere%26oq%3Dthere%2Bthere%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDI0MjBqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DRQVoatG3H4aRwbkPoL-kgA4&q=EgS1jW-wGMWKoNMGIjCjDpiN_DJtwhqOEFnZ8MAEts9OYwW4HsfQbnLMQJ2dEyxQa480gTuyylTUyfjYtpoyAVJaAUM",
  );
  await expect(page.locator("body")).toBeVisible();
});

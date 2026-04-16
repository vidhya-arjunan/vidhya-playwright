import { test, expect } from '@playwright/test';

test('User explores TechFlow and fills contact form', async ({ page }) => {

    // STEP 1 - Open page
    await page.goto("file:///C:/Users/DELL/Downloads/practice-landing.html#");

    // STEP 2 - Verify page loaded
    await expect(page.getByRole("heading", { name: "Build Faster\nShip Smarter" })).toBeVisible();

    // STEP 3 - Check nav links visible
    await expect(page.getByRole("link", { name: "TechFlow Home" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Features" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Pricing" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Testimonials" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign In" })).toBeEnabled();
    await expect(page.getByRole("button", { name: "Get Started" })).toBeEnabled();

    // STEP 4 - Click Get Started
    await page.getByRole("button", { name: "Get Started" }).click();

    // STEP 5 - Click Watch Demo
    await page.getByRole("button", { name: "Watch Demo" }).click();

    // STEP 6 - Newsletter
    await page.getByPlaceholder("Enter your email").fill("emailid@amail.com");
    await page.getByTestId("subscribe-btn").click();
    await expect(page.getByText(/You're subscribed!/)).toBeVisible();

    // STEP 7 - Contact form
    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page.getByRole("heading", { name: "Get in Touch" })).toBeVisible();
    await page.getByLabel("Full Name").fill("Vidhya");
    await page.getByLabel("Work Email").fill("emailid@amail.com");
    await page.getByRole("combobox", { name: "Subject" }).selectOption("Sales Enquiry");
    await page.getByLabel("Message").fill("Hello! How are you!");
    await page.getByTestId("contact-agree").check();

    // STEP 8 - Submit and verify
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(page.getByText(/Message sent! We'll be in touch soon./)).toBeVisible();
});


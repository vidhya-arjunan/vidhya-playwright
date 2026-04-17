/* Verify dynamic movie ticket booking flow in PVR Cinemas website
Preconditions
User has internet access
PVR Cinemas website is accessible
Test Steps
1. Launch the browser.
2. Navigate to https://www.pvrcinemas.com/.
3. cc
4. Click on the Cinema option.
5. Click on Select Cinema dropdown.
6. Select any available cinema from the list.
7. Select any available date (Today/Tomorrow/Upcoming).
8. Select any available movie from the movie list.
9. Select any available show time.
10. Click on the Submit button.
11. Accept the consent/cookie popup if displayed.
12. Accept any additional confirmation popup if displayed.
13. Select any available seat from the seating layout.
14. Verify the selected seat information is displayed.
15. Verify the total ticket amount is displayed.
16. Verify the page title is displayed correctly.
17. Click on the Proceed button.
 */

import {test, expect} from '@playwright/test'

test("Dynamic Ticket Booking - PVR", async ({page}) => {

//Launch the browser.
//Navigate to https://www.pvrcinemas.com/.

await page.goto("https://www.pvrcinemas.com/");
expect(page.title()).toBe("PVR Cinemas");

//Select the required city.


});
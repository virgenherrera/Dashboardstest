Feature: Validate login page

@end-to-end
Scenario: User login with invalid credentials
    Given A invalid username
    And   A invalid password
    When  I click on login button
    Then  The application displays an error message

@end-to-end
Scenario: User login with valid credentials
    Given A valid username
    And   A valid password
    When  I click on login button
    Then  I am able to access Eldermark's dashboards page

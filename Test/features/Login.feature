Feature: Validate login page

@end-to-end
Scenario: User login with valid credentials
    Given A valid username
    And   A valid password
    When  I click on login button
    Then  I am able to acces Eldermark's dashboards page

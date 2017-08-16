Feature: Verify Security Group and Number of Employees

@end-to-end
Scenario: Verify Security Group from list view
    Given Staff from the left menu
    And   Select a Community
    And   The user select Security Groups
    When  The user select list view
    And   Application shows security groups table
    Then  The values on the table should match with the external data

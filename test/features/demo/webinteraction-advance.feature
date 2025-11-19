Feature: Web interactions

    Scenario Outline: Demo web Interaction
        Given launch the Application <url>
        When Inventory page should list <numberOfProducts>
        Then Validate all products have valid price

        Examples:
            | url                                               | numberOfProducts |
            | https://testerbud.com/practice-ecommerece-website | 20               |


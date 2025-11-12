Feature: Demo feature

    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search wth <searchItem>
        Then Click on the first search result
        Then URL should match <expectedURL>

        Examples:
            | TestID     | searchItem | expectedURL                                                                                             |
            | DEMO_TC001 | shirt      | http://www.automationpractice.pl/index.php?id_product=1&controller=product&search_query=shirt&results=1 |
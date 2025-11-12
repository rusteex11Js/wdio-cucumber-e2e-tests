Feature: Web Interactions

    @ttest
    Scenario Outline: Demo Web Interactions
        Given A Web page is opened <url>
        When perform web interactions

        Examples:
            | TestID     | url     |
            | DEMO_TC002 | /inputs |
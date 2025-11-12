Feature: Web Interactions

    Scenario Outline: Demo Web Interactions
        Given A Web page is opened <url>
        When perform web interactions

        Examples:
            | TestID     | url     |
            | DEMO_TC002 | /inputs |

    Scenario Outline: Demo Web drop down Interactions
        Given A Web page is opened <url>
        When perform web interactions drop down

        Examples:
            | TestID     | url       |
            | DEMO_TC002 | /dropdown |

    Scenario Outline: Demo Web check box
        Given A Web page is opened <url>
        When perform web interactions checkboxes

        Examples:
            | TestID     | url         |
            | DEMO_TC002 | /checkboxes |

    Scenario Outline: Demo Web handling windows
        Given A Web page is opened <url>
        When perform web interactions handling windows

        Examples:
            | TestID     | url      |
            | DEMO_TC002 | /windows |

    Scenario Outline: Demo Web handling Alerts
        Given A Web page is opened <url>
        When perform web interactions handling windows

        Examples:
            | TestID     | url      |
            | DEMO_TC002 | /windows |

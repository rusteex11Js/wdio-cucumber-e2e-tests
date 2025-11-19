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
            | DEMO_TC003 | /dropdown |

    Scenario Outline: Demo Web check box
        Given A Web page is opened <url>
        When perform web interactions checkboxes

        Examples:
            | TestID     | url         |
            | DEMO_TC004 | /checkboxes |

    Scenario Outline: Demo Web handling windows
        Given A Web page is opened <url>
        When perform web interactions handling windows

        Examples:
            | TestID     | url      |
            | DEMO_TC005 | /windows |

    Scenario Outline: Demo Web handling Alerts
        Given A Web page is opened <url>
        When perform web interactions handling Alerts

        Examples:
            | TestID     | url                |
            | DEMO_TC006 | /javascript_alerts |


    Scenario: Demo Web handling basic auth
        Given A Web page is opened using basic auth
        When perform web interactions basic auth


    Scenario Outline: Demo Web File upload
        Given A Web page is opened <url>
        When perform web interactions File upload

        Examples:
            | TestID     | url     |
            | DEMO_TC007 | /upload |

    Scenario Outline: Demo Web Frames
        Given A Web page is opened <url>
        When perform web interactions Frames

        Examples:
            | TestID     | url     |
            | DEMO_TC008 | /frames |


    Scenario Outline: Demo Web Frames
        Given A Web page is opened <url>
        When perform web Keys

        Examples:
            | TestID     | url          |
            | DEMO_TC009 | /key_presses |


    Scenario Outline: Demo Web scrolling
        Given A Web page is opened <url>
        When perform web scroll

        Examples:
            | TestID     | url |
            | DEMO_TC010 | /   |

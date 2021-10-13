Feature: Check that packages are installed

    Checks that all required packages are installed locally
    Scenario: Check that gh is installed
    Given gh is installed
    When jumpstart --check is called
    Then return 0

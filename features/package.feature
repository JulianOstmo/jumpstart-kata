Feature: Check that packages are installed

    # Checks that all required packages are installed locally
    Scenario: Check that gh is installed within the jumpstart function
    Given gh is installed
    When jumpstart function is called
    Then return true

    Scenario: Check that gh is installed within the jumpstart script
    Given gh is installed
    When jumpstart --check-only is called
    Then return 0

# Contributing

To contribute to this project, clone this repository locally and commit your code to a seperate branch. Please write unit tests for your code and run the linter before opening a pull-request.

```bash
make test # runs linter and unit tests
```

# Releasing new versions

New versions of n-conversion-forms are published and released by creating a new release in github: https://github.com/Financial-Times/n-conversion-forms/releases

A circle-ci job will run and publish the new version (see: https://app.circleci.com/pipelines/github/Financial-Times/n-conversion-forms).

We use semantic versioning (semver, https://semver.org/), so versions will be something like: v5.2.1.

When creating a new release, **please ensure that you reference related PRs in the release notes**.
Depending on the change a short description may be needed and if a major, please document any breaking changes.
Optional: links to jira tickets are welcome (they should be in the related PRs already but that can save some clicks!)

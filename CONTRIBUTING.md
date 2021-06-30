# Contributing

To contribute to this project, clone this repository locally and commit your code to a seperate branch. Please write unit tests for your code and run the linter before opening a pull-request.

```bash
make test # runs linter and unit tests
```

# Releasing new versions

New versions of n-conversion-forms are published and released by creating a new release in github: https://github.com/Financial-Times/n-conversion-forms/releases

A circle-ci job will run and publish the new version (see: https://app.circleci.com/pipelines/github/Financial-Times/n-conversion-forms).

We use semantic versioning (semver, https://semver.org/), so versions will be something like: v5.2.1.

When creating a new release, **please ensure that you reference related PRs in the release notes**, ideally by using GitHubs magic links (type # and PR number and it will automatically create a link to that PR).

Depending on the change a short description may be needed and if a major, document any breaking changes.

Regarding breaking changes, please make sure to explain where some of the data may be coming from. If the change adds an argument to a function, spell out where the value of this argument needs to come from.
When possible, provide a code usage example or a reference to code in repo.

Optional: links to jira tickets are welcome (they should be in the related PRs already but that can save some clicks!)

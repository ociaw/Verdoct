# Verdoct

Lightweight documentation theme for Statiq Docs supporting API versioning.
This theme is based off of [Docable](https://github.com/statiqdev/Docable), but has been heavily modified.

![Screenshot of a Verdoct API page](https://user-images.githubusercontent.com/31906910/222332817-ebb13a43-53cf-46ab-9fff-83b389c4620e.png)

# Minimum Statiq Docs Version

This theme requires Statiq Docs 1.0.0-beta.8 or later.

Using an earlier commit of the theme may allow the use of an earlier version of Statiq Web (look at the theme `themesettings.yml` file to determine the minimum Statiq Docs version for a given version of the theme).

# Optional Dependencies

## [VersionedDocs]()
This package extends and modifies Statiq.Docs by adding API version support, allowing multiple version of the same code to be documented, e.g. v1.0 and v2.0. 

## [StatiqMermaid](https://github.com/ociaw/StatiqMermaid)
This package statically generates type diagrams using mermaid-js during build, removing the need for mermaid-js on the client.

Available on [NuGet](https://www.nuget.org/packages/Ociaw.StatiqMermaid/).

# Installation

Statiq themes go in a `theme` folder alongside your `input` folder. If your site is inside a git repository, you can add the theme as a git submodule:

```
git submodule add https://github.com/ociaw/Verdoct.git theme
```

Alternatively you can clone the theme directly:

```
git clone https://github.com/ociaw/Verdoct.git theme
```

Once inside the `theme` folder, Statiq will automatically recognize the theme. If you want to tweak the theme you can edit files directly in the `theme` folder or copy them to your `input` folder and edit them there.

# Settings

## Global

These are theme-specific settings and can be set in a settings file (in addition to any Statiq Docs settings or [Statiq Web settings](https://statiq.dev/web/configuration/settings)).

- `SiteTitle`: The title of the site. This should be defined regardless of whether `Logo` is because it's used for the page title, alt attributes, etc. 
- `Logo`: The logo file to use in the navigation bar (include a leading slash if providing a relative path). If not provided, the `SiteTitle` will be used.
- `EditRoot`: The root link to use for editing pages, usually set to a value like `https://github.com/org/repo/edit/develop/input` (do not use a trailing slash).
- `HideTypeDiagrams`: Indicates if type diagrams should be displayed for types. If a diagram generator pipeline such as
[StatiqMermaid](https://github.com/ociaw/StatiqMermaid) isn't in use, this should be enabled.

### Colors, Fonts, and Breakpoints

These can be adjusted in `_variables.scss`. By default Verdoct does not use any downloadable fonts to reduce initial download size.

## Page

These can be set in front matter, a sidecar file, etc. (in addition to any [Statiq Web settings](https://statiq.dev/web/configuration/settings)).

- `EditLink`: A more specific editing link that overrides `EditRoot` if needed.
- `ShowInNavigation`: Set to `false` to hide the page in the top navigation.
- `NavigationTitle`: The title of a page when displayed in the navigation, otherwise the normal title will be used.
- `BreadcrumbTitle`: The title of a page when displayed in the breadcrumbs, otherwise the normal title will be used.

# Partials

Replace or copy any of these Razor partials in your `input` folder to override sections of the site:

- `_Head`
- `_Navigation`
- `_Breadcrumbs`
- `_Title`
- `_Splash`
- `_Sidebar`
- `_ChildPages`
- `_RightSidebar`
- `_Footer`
- `_Scripts`

# Sections

In addition to globally changing sections of the site using the partials above you can also add the following Razor sections to any given page to override them for that page (which will typically disable the use of the corresponding partial):

- `Head`
- `Breadcrumbs`
- `Title`
- `Subtitle`
- `Splash`
- `Sidebar`
- `ChildPages`
- `RightSidebar`
- `Scripts`

# Index Page

You should provide your own `index.cshtml` or `index.md`.

# Xrefs

Xrefs for API pages are prefixed with `api-`.
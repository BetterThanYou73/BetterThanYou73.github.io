source "https://rubygems.org"

# Specify the Jekyll version
gem "jekyll"

# Minimal Mistakes theme
gem "minimal-mistakes-jekyll"

# Include cache for faster builds
gem "jekyll-include-cache", group: :jekyll_plugins

gem "github-pages", group: :jekyll_plugins
gem "jekyll-include-cache", group: :jekyll_plugins

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
end

# Additional gems to silence warnings about standard library gems
gem "webrick"
gem "csv"
gem "base64"
gem "bigdecimal"

# Windows and JRuby dependencies
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.1", platforms: [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]

GITHUB_REPO_ARCHIVE=https://github.com/Colorsublime/Colorsublime-Themes/archive/master.zip

build:
	# fetching themes
	@ rm -rf _themes/*
	@ mkdir -p tmp
	@ curl -LOks $(GITHUB_REPO_ARCHIVE)
	@ unzip -o master.zip -d tmp
	@ node build
	@ cp tmp/Colorsublime-Themes-master/themes/*.tmTheme ace/tool/tmthemes
	# generate ace files
	@ cd ace/tool && \
		npm install && \
		node tmtheme.js && \
		cd ../ && \
		npm install && \
		node ./Makefile.dryice.js -m
	@ make clean-tmp

deploy:
	@ git checkout -f dev
	@ jekyll build
	@ git checkout master
	@ mv _site .site
	@ rm -rf *
	@ mv .site/* .
	@ rm -rf .site
	@ git add .
	@ git commit -m"New release"
	@ git push origin master
	@ git checkout dev

install:
	@ gem install jekyll
	@ gem install jekyll-paginate-v2
	@ gem install jekyll-lunr-js-search

serve:
	@ jekyll serve

clean-tmp:
	@ rm -rf tmp master.zip

clean: clean-tmp
	@ jekyll clean


.PHONY: build deploy install serve clean-tmp deploy
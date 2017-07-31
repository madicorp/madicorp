require 'json'

module Jekyll

  class JSONPost < Page; end

  class JSONGenerator < Generator
    priority :lowest
    safe true

    def generate(site)
      generate_projects(site)
    end

    def generate_projects(site)
      projects_array = []
      site.data["projects"].each do |project|
        project_hash = project.to_liquid.keep_if { |k, _| ['id', 'details'].include? k }
        projects_array.push project_hash
      end
      json_dest = "projects/json/"
      full_path = "#{site.dest}/#{json_dest}"
      ensure_directory(full_path)
      File.open("#{full_path}index.json", 'w') { |f| f.write(projects_array.to_json) }
      site.pages << Jekyll::JSONPost.new(site, site.dest, json_dest, 'index.json')
    end

    def ensure_directory(path)
      FileUtils.mkdir_p(path) unless File.exists?(path)
    end
  end
end
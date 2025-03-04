default:
    @just -l --unsorted

new-web TITLE:
    @echo '---\nhide_title: true\ntitle: {{TITLE}}\n---\n' > 'docs/learn-web/{{TITLE}}.mdx'
    @echo 'Created docs/learn-web/{{TITLE}}.mdx'
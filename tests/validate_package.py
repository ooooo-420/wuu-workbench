from pathlib import Path
root=Path(__file__).resolve().parents[1]
for name in ['jd-resume-local','career-wiki-curator','resume-evidence-audit']:
    p=root/'skills'/name/'SKILL.md'
    text=p.read_text(encoding='utf-8')
    assert text.startswith('---'+chr(10))
    assert 'name: '+name in text and 'description:' in text
    assert len(text.split('---'))>=3
assert (root/'skills/jd-resume-local/references/writing-and-checks.md').exists()
for p in root.rglob('*'):
    if p.is_file():
        assert p.suffix not in ['.sqlite','.pdf','.docx','.pptx']
        text=p.read_text(encoding='utf-8')
        assert not __import__('re').search(r'(?<![0-9])1[3-9][0-9]{9}(?![0-9])',text)
print('Package structure and privacy smoke checks passed.')

import docx
import os

# Afficher les noms exacts des fichiers
print('Fichiers disponibles:')
for file in sorted(os.listdir('.')):
    if file.startswith('Partie'):
        print(f'  - "{file}"')

print('\nLecture détaillée des parties:')
parts_content = {}

for i in range(1, 8):
    # Trouver le fichier correspondant
    matching_files = [f for f in os.listdir('.') if f.startswith(f'Partie {i}') and f.endswith('.docx')]
    
    if matching_files:
        filename = matching_files[0]
        try:
            doc = docx.Document(filename)
            content = []
            for para in doc.paragraphs:
                if para.text.strip():
                    content.append(para.text)
            
            parts_content[i] = {
                'filename': filename,
                'content': content
            }
            
            print(f'\n=== PARTIE {i} ===')
            print(f'Fichier: {filename}')
            print(f'Nombre de paragraphes: {len(content)}')
            for j, text in enumerate(content[:3]):  # Afficher les 3 premiers paragraphes
                print(f'  {j+1}. {text[:100]}...' if len(text) > 100 else f'  {j+1}. {text}')
            if len(content) > 3:
                print(f'  ... et {len(content)-3} autres paragraphes')
                
        except Exception as e:
            print(f'Erreur lecture {filename}: {e}')
            parts_content[i] = {'filename': filename, 'content': []}
    else:
        print(f'Aucun fichier trouvé pour la Partie {i}')

# Sauvegarder le contenu pour utilisation ultérieure
import json
with open('parts_content.json', 'w', encoding='utf-8') as f:
    json.dump(parts_content, f, ensure_ascii=False, indent=2)

print(f'\nContenu sauvegardé dans parts_content.json')

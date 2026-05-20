import re
import json
from pathlib import Path

PRODUCTS_DIR = Path('assets/products')
TARGET_FILE = Path('js/data.js')

CATEGORY_KEYWORDS = {
    'photochromique': ['photochromique', 'photo-gray', 'photochromique'],
    'anti-lumiere': ['anti-lumiere', 'blue', 'comfort-vision', 'vision-pro'],
    'anti-reflet': ['reflet', 'classic', 'elegance', 'signature', 'optique', 'premium', 'business'],
    'solaire': ['solaire', 'sun', 'uv', 'gold', 'black', 'dark', 'luxe'],
}

BADGE_BY_CATEGORY = {
    'photochromique': 'Photochromique',
    'anti-lumiere': 'Anti lumière bleue',
    'anti-reflet': 'Anti reflet',
    'solaire': 'Solaire',
}

RANGES = {
    'photochromique': (11000, 13500),
    'anti-lumiere': (8000, 9800),
    'anti-reflet': (9000, 10500),
    'solaire': (9000, 12500),
}

FEATURES_BY_CATEGORY = {
    'photochromique': ['Verres photochromiques', 'Protection UV', 'Anti reflet', 'Monture moderne'],
    'anti-lumiere': ['Filtre lumière bleue', 'Monture légère', 'Confort prolongé', 'Design premium'],
    'anti-reflet': ['Traitement anti reflet', 'Vision nette', 'Monture élégante', 'Usage quotidien'],
    'solaire': ['Protection UV', 'Verres polarisés', 'Style premium', 'Confort extérieur'],
}

DESCRIPTION_BY_CATEGORY = {
    'photochromique': 'Verres intelligents qui adaptent la teinte à la luminosité pour un confort optimal.',
    'anti-lumiere': 'Verres conçus pour filtrer la lumière bleue et réduire la fatigue oculaire.',
    'anti-reflet': 'Traitement anti reflet pour une vision claire et confortable en toutes conditions.',
    'solaire': 'Protection solaire maximale avec style élégant et confort renforcé.',
}


def infer_category(name: str) -> str:
    lowered = name.lower()
    for category, keywords in CATEGORY_KEYWORDS.items():
        for keyword in keywords:
            if keyword in lowered:
                return category
    return 'photochromique'


def normalize_name(raw: str) -> str:
    text = raw.replace('_', ' ')
    text = re.sub(r'\.(jpe?g|png)$', '', text, flags=re.IGNORECASE)
    text = re.sub(r'\.(jpe?g|png)(?:\.|$)', ' ', text, flags=re.IGNORECASE)
    text = text.replace('  ', ' ').strip()
    text = text.replace('-', ' ')
    parts = []
    for part in text.split():
        if part.lower() == 'uv':
            parts.append('UV')
        else:
            parts.append(part.capitalize())
    return ' '.join(parts)


def format_id(name: str) -> str:
    safe = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    return safe[:40] if len(safe) > 40 else safe


def price_for_category(category: str, name: str) -> int:
    lo, hi = RANGES.get(category, (8500, 12000))
    base = sum(ord(c) for c in name) % (hi - lo + 1)
    return lo + base


def main():
    files = sorted([p for p in PRODUCTS_DIR.iterdir() if p.suffix.lower() in ['.jpg', '.jpeg', '.png']])
    unique_files = {}
    for path in files:
        stem = path.stem
        if stem.lower().endswith('.jpeg') or stem.lower().endswith('.jpg'):
            stem = Path(stem).stem
        if stem not in unique_files:
            unique_files[stem] = path.name

    items = []
    for i, (stem, filename) in enumerate(unique_files.items(), start=1):
        name = normalize_name(stem)
        category = infer_category(stem)
        price = price_for_category(category, stem)
        badge = BADGE_BY_CATEGORY.get(category, 'Premium')
        product_id = format_id(name)
        featured = i <= 12
        promo = category in ['photochromique', 'solaire']
        availability = 'En stock' if i % 4 != 0 else 'Stock limité'

        items.append({
            'id': product_id,
            'name': name,
            'price': price,
            'image': f'assets/products/{filename}',
            'images': [f'assets/products/{filename}'],
            'category': category,
            'availability': availability,
            'description': DESCRIPTION_BY_CATEGORY.get(category, 'Lunette élégante et protectrice.'),
            'longDescription': f'{name} est conçue pour offrir style, confort et performance.',
            'features': FEATURES_BY_CATEGORY.get(category, ['Design moderne', 'Confort durable', 'Protection efficace', 'Style premium']),
            'badge': badge,
            'featured': featured,
            'promo': promo,
        })

    products_js = 'const PRODUCTS = ' + json.dumps(items, ensure_ascii=False, indent=2) + ';\n\n'
    testimonials = [
        {
            'name': 'Aïssatou D.',
            'role': 'Cliente satisfaite',
            'text': 'J’ai acheté une paire anti lumière bleue et je sens vraiment la différence. Livraison rapide et service très professionnel.',
        },
        {
            'name': 'Moussa K.',
            'role': 'Client fidèle',
            'text': 'Monture élégante et très confortable. J’adore le traitement anti reflet, parfait pour le bureau et le soleil.',
        },
        {
            'name': 'Fatou S.',
            'role': 'Nouvelle cliente',
            'text': 'Le service WhatsApp m’a aidé à choisir la meilleure paire. Je recommande fortement Pikine Optique Vision.',
        }
    ]
    products_js += 'const TESTIMONIALS = ' + json.dumps(testimonials, ensure_ascii=False, indent=2) + '\n\n'
    products_js += '''const ORDERS_KEY = "pikine-optique-vision-orders";
const PRODUCTS_KEY = "pikine-optique-vision-products";

const getStoredProducts = () => {
  const stored = localStorage.getItem(PRODUCTS_KEY);
  return stored ? JSON.parse(stored) : PRODUCTS;
};

const saveProducts = (productList) => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(productList));
};

const getStoredOrders = () => {
  const stored = localStorage.getItem(ORDERS_KEY);
  return stored ? JSON.parse(stored) : [];
};

const saveOrder = (order) => {
  const current = getStoredOrders();
  current.unshift(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(current));
};
'''
    TARGET_FILE.write_text(products_js, encoding='utf-8')
    print(f'Generated {len(items)} products into {TARGET_FILE}')


if __name__ == '__main__':
    main()

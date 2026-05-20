import base64
import os

assets = {
    'assets/banners/banner-main.jpg': '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP///////////////////////////////////////////////////////////////////////////////////////2wBDAf///////////////////////////////////////////////////////////////////////////////////////wAARCAAQABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/AKf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AKf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AKf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/Ap//2Q==',
    'assets/logos/logo-pikine-optique.png': 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAFElEQVR42mP8z8BQz0AEYBxVSFIAAAoABVgYoO0AAAAASUVORK5CYII=',
    'assets/products/lunette-photo-gray-1.jpg': '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP///////////////////////////////////////////////////////////////////////////////////////2wBDAf///////////////////////////////////////////////////////////////////////////////////////wAARCAAQABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/AKf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AKf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AKf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/Ap//2Q==',
    'assets/products/lunette-anti-lumiere-bleue.jpg': '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP///////////////////////////////////////////////////////////////////////////////////////2wBDAf///////////////////////////////////////////////////////////////////////////////////////wAARCAAQABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/AKf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AKf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AKf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/Ap//2Q==',
    'assets/products/lunette-solaire-noire.jpg': '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP///////////////////////////////////////////////////////////////////////////////////////2wBDAf///////////////////////////////////////////////////////////////////////////////////////wAARCAAQABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/AKf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AKf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AKf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/Ap//2Q==',
}

for path, data in assets.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'wb') as f:
        f.write(base64.b64decode(data))
print('Images générées.')

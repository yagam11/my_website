from PIL import Image

# Define the path to the images and output size
image_files = [
    "my_website/src/processing/bostonu.png",
    # "my_website/src/processing/brownu.png",
    "my_website/src/processing/suisgb.png"
]
output_size = (100, 100)  # Resize to 50x50 pixels

# Process each image: open, resize, and save
for file_path in image_files:
    with Image.open(file_path) as img:
        resized_img = img.resize(output_size, Image.ANTIALIAS)
        resized_img.save(file_path)  # Overwrite the original file with resized image

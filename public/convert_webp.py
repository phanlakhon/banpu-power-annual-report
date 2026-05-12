from PIL import Image, ImageEnhance
import os

INPUT = "page_024"
OUTPUT = "page_024_webp"
os.makedirs(OUTPUT, exist_ok=True)

for filename in os.listdir(INPUT):
    if filename.endswith(".png") or filename.endswith(".jpg"):
        img = Image.open(f"{INPUT}/{filename}")
        
        # เพิ่มความคมชัด
        img = ImageEnhance.Sharpness(img).enhance(2.2)
        # เพิ่ม contrast ให้ตัวหนังสือเข้มขึ้น
        # img = ImageEnhance.Contrast(img).enhance(1.2)
        
        new_name = filename.rsplit(".", 1)[0] + ".webp"
        img.save(f"{OUTPUT}/{new_name}", "WEBP", quality=85)
        print(f"แปลง {filename} → {new_name} เสร็จแล้ว")

print("เสร็จทั้งหมด!")
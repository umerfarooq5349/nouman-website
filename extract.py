import json
import os

with open(r"C:\Users\Muhammad Umer Farooq\Desktop\project\scratch_footer.json", "r", encoding="utf-16") as f:
    data = json.load(f)

text = data.get("content", "")
start_marker = "flickering-footer.tsx"
start_idx = text.find(start_marker)

if start_idx != -1:
    start_idx += len(start_marker)
    # Find the next ``` close block
    end_idx = text.find("```", start_idx)
    if end_idx != -1:
        code = text[start_idx:end_idx].strip()
        
        # Write out to target file
        target_path = r"c:\Users\Muhammad Umer Farooq\Desktop\project\components\ui\flickering-footer.tsx"
        with open(target_path, "w", encoding="utf-8") as out:
            out.write(code)
        print("Successfully extracted to components/ui/flickering-footer.tsx")
    else:
        print("End marker not found")
else:
    print("Start marker not found")

#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
使用方法：
 python userinput.py # 需要 prompts.txt
"""

import os
import sys

if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass


def read_prompts_file(filename="prompts.txt"):
    if not os.path.exists(filename):
        return None

    try:
        with open(filename, "r", encoding="utf-8") as f:
            content = f.read().strip()
            if content:
                return content
    except Exception as e:
        print(f"读取 {filename} 失败: {e}")

    return None


def main():
    content = read_prompts_file()
    if content:
        print(" prompts.txt:")
        print("=" * 60)
        print(content)
        print("=" * 60)
        print("\n完成")
    else:
        print(" 未找到 prompts.txt")
    return


if __name__ == "__main__":
    main()

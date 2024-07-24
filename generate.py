import random
import string

def generate_random_string(length):
  letters = string.ascii_lowercase
  return ''.join(random.choice(letters) for _ in range(length))

def generate_unique_emails(count):
  emails = set()
  while len(emails) < count:
    email = generate_random_string(10) + '@example.com'  # Adjust domain as needed
    emails.add(email)
  return list(emails)

def generate_ts_file(filename, data):
  with open(filename, 'w') as file:
    file.write("export default [\n")
    for idx, email in enumerate(data):
      if idx == len(data) - 1:
        file.write(f"  {{ name: 'Name{idx}', email: '{email}', password: 'password{idx}' }}\n")
      else:
        file.write(f"  {{ name: 'Name{idx}', email: '{email}', password: 'password{idx}' }},\n")
    file.write("]\n")

if __name__ == '__main__':
  num_entries = 100000
  emails = generate_unique_emails(num_entries)
  filename = 'src/data/users.ts'
  generate_ts_file(filename, emails)
  print(f"Generated {num_entries} entries with unique emails in {filename}")

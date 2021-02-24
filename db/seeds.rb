# Seed Data

User.destroy_all
Blog.destroy_all

user_1 =
  User.create(
    first_name: 'Maddox',
    last_name: 'Grey',
    email: 'maddoxgrey42+admin@gmail.com',
    password: 'password',
    role: 'admin'
  )

blog_1 =
  Blog.create(
    title: 'Blog Article 1',
    caption: 'Blog Test Caption',
    body: 'Blah blah blah',
    category: 'costa-rica',
    user: user_1
  )

class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.string :title,      null: false
      t.string :caption,    null: false
      t.string :body,       null: false
      t.string :category, null: false

      t.belongs_to :user,        null: false

      t.timestamps
    end
  end
end
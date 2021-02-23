class Blog < ApplicationRecord
  
  validates :title, presence: true
  validates :caption, presence: true
  validates :body, presence: true
  validates :categories, presence: true
  
end
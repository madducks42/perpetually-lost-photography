class Blog < ApplicationRecord
  belongs_to :user
  
  validates :title, presence: true
  validates :caption, presence: true
  validates :body, presence: true
  validates :categories, presence: true
  
end
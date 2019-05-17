class Product < ApplicationRecord
  validates :name, :uri, presence: true
  validates :price, presence: true, numericality: { greater_than: 0 }
  validates :quality_rating, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 6 }
end

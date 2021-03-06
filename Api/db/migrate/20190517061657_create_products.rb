class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :uri, null: false
      t.decimal :price, null: false
      t.integer :quality_rating, null: false

      t.timestamps
    end
  end
end

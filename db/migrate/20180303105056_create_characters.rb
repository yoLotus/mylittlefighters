class CreateCharacters < ActiveRecord::Migration[5.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :toughness
      t.integer :power

      t.timestamps
    end
  end
end

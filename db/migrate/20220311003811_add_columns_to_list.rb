class AddColumnsToList < ActiveRecord::Migration[6.1]
  def change
    add_column :apartments, :pictures, :string
  end
end

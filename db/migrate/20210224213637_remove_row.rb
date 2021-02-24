class RemoveRow < ActiveRecord::Migration[6.1]
  def change
    remove_column :departments, :text
  end
end

class Name < ActiveRecord::Base
  validates :name, presence: true, length: { maximum: 30 }

  def first_name
    name.split(' ').first
  end

  def last_name
    name.split(' ').last
  end

  def pretty_name
    name.split.map(&:capitalize).join(' ')
  end

  def query
    name.downcase.tr(' ','+')
  end
end

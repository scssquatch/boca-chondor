class Name < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true, length: { maximum: 30 }

  serialize :pretty_name

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
    name.downcase.tr(' ', '+')
  end
end

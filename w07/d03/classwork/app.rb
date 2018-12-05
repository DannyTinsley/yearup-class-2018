require './calculator.rb'

begin
  calculator = Calculator.new
rescue
  puts "Please enter valid input!"
end